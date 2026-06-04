require_relative 'base_handler'

class HtmlDashboardHandler < BaseHandler
  def initialize(output_file = 'dashboard.html')
    @output_file = output_file
    @events = []
  end

  def call(event)
    @events << event
    regenerate_dashboard
  end

  private

  def generate_timeline_html
    return '<div class="empty-state">No activities logged yet. Get started by selecting an option in the terminal!</div>' if @events.empty?

    @events.reverse.map do |e|
      cat_class = "cat-#{e.category.downcase}"
      formatted_time = e.timestamp.strftime("%Y-%m-%d %H:%M")
      <<-HTML_ITEM
        <div class="timeline-item #{cat_class}">
          <div class="time-badge">#{formatted_time}</div>
          <div class="event-details">
            <span class="event-desc">#{e.description}</span>
            <span class="event-cat">#{e.category}</span>
          </div>
          <div class="event-duration">#{e.duration} min</div>
        </div>
      HTML_ITEM
    end.join("\n")
  end

  def generate_category_stats_html(total_duration, category_data)
    categories = ['work', 'study', 'exercise', 'meal']
    categories.map do |cat|
      data = category_data[cat]
      percentage = total_duration > 0 ? (data[:duration].to_f / total_duration * 100).round : 0
      <<-HTML_ROW
        <div class="category-stat-row">
          <div class="category-info">
            <span class="category-name">
              <span class="category-dot cat-#{cat}"></span>
              #{cat}
            </span>
            <span style="color: var(--text-secondary);">
              #{data[:count]} logs (#{data[:duration]}m)
            </span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill cat-#{cat}" style="width: #{percentage}%;"></div>
          </div>
        </div>
      HTML_ROW
    end.join("\n")
  end

  def regenerate_dashboard
    total_events = @events.size
    total_duration = @events.sum(&:duration)
    
    # Category calculations
    categories = ['work', 'study', 'exercise', 'meal']
    category_data = {}
    categories.each do |cat|
      cat_events = @events.select { |e| e.category.downcase == cat }
      category_data[cat] = {
        count: cat_events.size,
        duration: cat_events.sum(&:duration)
      }
    end

    html_content = <<~HTML
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>LifeTrack Dashboard</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
        <style>
          :root {
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
            --glass-bg: rgba(30, 41, 59, 0.7);
            --glass-border: rgba(255, 255, 255, 0.08);
            --text-primary: #f8fafc;
            --text-secondary: #94a3b8;
            --color-work: #6366f1;
            --color-study: #0ea5e9;
            --color-exercise: #10b981;
            --color-meal: #f43f5e;
          }

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Outfit', sans-serif;
            background: var(--bg-gradient);
            color: var(--text-primary);
            min-height: 100vh;
            padding: 2rem 1.5rem;
            display: flex;
            justify-content: center;
          }

          .container {
            width: 100%;
            max-width: 1100px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--glass-border);
            padding-bottom: 1.5rem;
          }

          h1 {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(to right, #a5b4fc, #6366f1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .last-updated {
            font-size: 0.9rem;
            color: var(--text-secondary);
          }

          /* Overview Cards */
          .overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1.5rem;
          }

          .card {
            background: var(--glass-bg);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .card:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px 0 rgba(99, 102, 241, 0.15);
            border-color: rgba(99, 102, 241, 0.3);
          }

          .card-title {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-bottom: 0.5rem;
          }

          .card-value {
            font-size: 2.2rem;
            font-weight: 700;
          }

          .card-unit {
            font-size: 1rem;
            font-weight: 400;
            color: var(--text-secondary);
          }

          /* Dashboard Layout */
          .dashboard-body {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 2rem;
          }

          @media (max-width: 850px) {
            .dashboard-body {
              grid-template-columns: 1fr;
            }
          }

          /* Timeline Section */
          .section-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1.2rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .timeline {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .timeline-item {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
            gap: 1.5rem;
            padding: 1.2rem;
            border-radius: 12px;
            background: rgba(30, 41, 59, 0.4);
            border-left: 5px solid var(--color-work);
            transition: background 0.2s ease;
          }

          .timeline-item:hover {
            background: rgba(30, 41, 59, 0.6);
          }

          .timeline-item.cat-work { border-left-color: var(--color-work); }
          .timeline-item.cat-study { border-left-color: var(--color-study); }
          .timeline-item.cat-exercise { border-left-color: var(--color-exercise); }
          .timeline-item.cat-meal { border-left-color: var(--color-meal); }

          .time-badge {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--text-secondary);
            font-family: monospace;
            background: rgba(15, 23, 42, 0.4);
            padding: 0.4rem 0.6rem;
            border-radius: 6px;
          }

          .event-details {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }

          .event-desc {
            font-size: 1.05rem;
            font-weight: 500;
          }

          .event-cat {
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: inline-block;
          }

          .timeline-item.cat-work .event-cat { color: var(--color-work); }
          .timeline-item.cat-study .event-cat { color: var(--color-study); }
          .timeline-item.cat-exercise .event-cat { color: var(--color-exercise); }
          .timeline-item.cat-meal .event-cat { color: var(--color-meal); }

          .event-duration {
            font-size: 1.1rem;
            font-weight: 600;
            color: #e2e8f0;
          }

          /* Category Stats */
          .category-stats-list {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
          }

          .category-stat-row {
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
          }

          .category-info {
            display: flex;
            justify-content: space-between;
            font-size: 0.95rem;
            font-weight: 500;
          }

          .category-name {
            text-transform: capitalize;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .category-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
          }

          .category-dot.cat-work { background-color: var(--color-work); }
          .category-dot.cat-study { background-color: var(--color-study); }
          .category-dot.cat-exercise { background-color: var(--color-exercise); }
          .category-dot.cat-meal { background-color: var(--color-meal); }

          .progress-bar-bg {
            height: 8px;
            background: rgba(15, 23, 42, 0.4);
            border-radius: 4px;
            overflow: hidden;
            width: 100%;
          }

          .progress-bar-fill {
            height: 100%;
            border-radius: 4px;
            width: 0%;
            transition: width 0.4s ease;
          }

          .progress-bar-fill.cat-work { background: var(--color-work); }
          .progress-bar-fill.cat-study { background: var(--color-study); }
          .progress-bar-fill.cat-exercise { background: var(--color-exercise); }
          .progress-bar-fill.cat-meal { background: var(--color-meal); }

          /* Empty State */
          .empty-state {
            text-align: center;
            padding: 3rem;
            color: var(--text-secondary);
            font-size: 1.1rem;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div>
              <h1>LifeTrack</h1>
              <p style="color: var(--text-secondary); margin-top: 0.2rem;">Your dynamic life routing log</p>
            </div>
            <div class="last-updated">
              Last event: #{Time.now.strftime("%H:%M:%S")}
            </div>
          </header>

          <main class="overview-grid">
            <div class="card">
              <p class="card-title">Total Sessions</p>
              <p class="card-value">#{total_events}</p>
            </div>
            <div class="card">
              <p class="card-title">Total Active Time</p>
              <p class="card-value">#{total_duration} <span class="card-unit">min</span></p>
            </div>
            <div class="card">
              <p class="card-title">Average Session</p>
              <p class="card-value">#{total_events > 0 ? (total_duration.to_f / total_events).round(1) : 0} <span class="card-unit">min</span></p>
            </div>
          </main>

          <div class="dashboard-body">
            <!-- Timeline of events -->
            <section>
              <h2 class="section-title">Activity Feed</h2>
              <div class="timeline">
                #{generate_timeline_html}
              </div>
            </section>

            <!-- Sidebar Statistics -->
            <aside>
              <div class="card" style="height: 100%;">
                <h2 class="section-title" style="font-size: 1.3rem;">Category Breakdown</h2>
                <div class="category-stats-list">
                  #{generate_category_stats_html(total_duration, category_data)}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </body>
      </html>
    HTML

    File.write(@output_file, html_content)
  end
end
