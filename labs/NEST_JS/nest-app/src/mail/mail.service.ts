import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;

    constructor(private configService: ConfigService) {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.configService.get<string>('EMAIL_USER'),
                pass: this.configService.get<string>('EMAIL_PASS'),
            },
        });
    }

    async sendWelcomeEmail(to: string, name: string): Promise<void> {
        try {
            await this.transporter.sendMail({
                from: this.configService.get<string>('EMAIL_USER'),
                to,
                subject: 'Welcome to Our App!',
                html: `<h1>Hello ${name}!</h1><p>Welcome to our application. Your account has been created successfully.</p>`,
            });
        } catch (error) {
            console.log('Email sending failed:', error.message);
        }
    }
}
