def compose_email(from_addr, to_addr, subject, receiver_name):
    email_content = f"""From: {from_addr}
To: {to_addr}
Subject: {subject}

Hello {receiver_name},

This is an automatically generated email.

Best regards,
{from_addr}
"""
    filename = "email.txt"
    with open(filename, "w") as file:
        file.write(email_content)
    print(f"Email successfully written to {filename}")

if __name__ == "__main__":
    from_input = input("From: ")
    to_input = input("To: ")
    subject_input = input("Subject: ")
    receiver_input = input("Receiver Name: ")
    compose_email(from_input, to_input, subject_input, receiver_input)
