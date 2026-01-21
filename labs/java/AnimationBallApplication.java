import javax.swing.*;
import java.awt.*;

public class AnimationBallApplication extends JFrame implements Runnable {
    
    Thread animationThread;
    int ballX = 20;
    int ballY = 20;
    int ballSize = 50;
    int speedX = 5;
    int speedY = 5;
    BallPanel ballPanel;
    Image ballImage;
    
    public AnimationBallApplication() {
        setTitle("Animation Ball");
        setSize(600, 400);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        
        ballImage = new ImageIcon("../html/assets/kora.jpg").getImage();
        
        ballPanel = new BallPanel();
        add(ballPanel);
        
        animationThread = new Thread(this);
        animationThread.start();
    }
    
    public void run() {
        while (true) {
            ballX = ballX + speedX;
            ballY = ballY + speedY;
            
            if (ballX <= 0 || ballX >= ballPanel.getWidth() - ballSize) {
                
                speedX = -speedX;
            }
            
            if (ballY <= 0 || ballY >= ballPanel.getHeight() - ballSize) {
                speedY = -speedY;
            }
            //repaint the ball panel to paint the ball
            ballPanel.repaint();
            
            try {
                Thread.sleep(30);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }
    //inner class BallPanel extends JPanel to paint the ball
    class BallPanel extends JPanel {
        public void paintComponent(Graphics g) {
            super.paintComponent(g);
            g.drawImage(ballImage, ballX, ballY, ballSize, ballSize, this);
        }
    }
    
    public static void main(String[] args) {
        AnimationBallApplication app = new AnimationBallApplication();
        app.setVisible(true);
    }
}
