import javax.swing.*;
import java.awt.*;
import java.util.Date;

public class DateTimeApplication extends JFrame implements Runnable {
    Thread th;
    Date d=new Date();
    JLabel label=new JLabel();
    public DateTimeApplication(){
        this.setTitle("DateTimeApplication");
        label.setHorizontalAlignment(JLabel.CENTER);
        label.setFont(new Font("Arial",Font.BOLD,24));
        label.setText(d.toString());
        this.add(label,BorderLayout.CENTER);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        th=new Thread(this);
        th.start();
    }

    public void run() {
        while (true) {
            d = new Date();
            label.setText(d.toString());
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        DateTimeApplication app = new DateTimeApplication();
        app.setVisible(true);
    }
}
