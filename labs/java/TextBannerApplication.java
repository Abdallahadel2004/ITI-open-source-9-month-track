import javax.swing.*;
import java.awt.*;

public class TextBannerApplication extends JFrame implements Runnable {
    //declare the variables
     Thread animationThread;//the thread for the animation
     JLabel bannerLabel;
     String bannerText = "Welcome to ITI - Java Programming Course! ";//the text of the banner
     int xPosition;//the x position of the banner what is banner?
     int animationDelay = 30;
     int scrollSpeed = 3;
    
    public TextBannerApplication() {
        this.setTitle("Text Banner Application");
        this.setSize(600, 150);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setLayout(null);
        
        bannerLabel = new JLabel(bannerText);
        bannerLabel.setFont(new Font("Arial", Font.BOLD, 36));
        
        FontMetrics fm = bannerLabel.getFontMetrics(bannerLabel.getFont());//get the font metrics of the banner label
        int textWidth = fm.stringWidth(bannerText);
        bannerLabel.setSize(textWidth, 50);
        
        xPosition = -textWidth; // start from left (off-screen)
        bannerLabel.setLocation(xPosition, 50);
        this.add(bannerLabel);
        
        animationThread = new Thread(this);
        animationThread.start();
    }
    
    @Override
    public void run() {
        FontMetrics fm = bannerLabel.getFontMetrics(bannerLabel.getFont());
        int textWidth = fm.stringWidth(bannerText);
        
        while (true) {
            xPosition += scrollSpeed; // increase the x position (move right)
            
            if (xPosition > this.getWidth()) { // if text goes off right side, reset to left
                xPosition = -textWidth;
            }
            bannerLabel.setLocation(xPosition, 50);//set the location of the banner label to the x position and 50
            try {
                Thread.sleep(animationDelay);//sleep for the animation delay
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    
    public static void main(String[] args) {
        TextBannerApplication app = new TextBannerApplication();
        app.setVisible(true);
    }
}
