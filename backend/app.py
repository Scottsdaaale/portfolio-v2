import json
from flask import Flask, render_template, jsonify, abort, request
from flask_mail import Mail, Message
import os
from flask_cors import CORS
from dotenv import load_dotenv
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
CORS(app)

# Create the Limiter instance without the app
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["5 per hour"]
)

app.config.update(
    MAIL_SERVER='smtp.gmail.com',
    MAIL_PORT=587,
    MAIL_USE_TLS=True,
    MAIL_USERNAME=os.environ.get('MAIL_USERNAME'),
    MAIL_PASSWORD=os.environ.get('MAIL_PASSWORD')
)
mail = Mail(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/send_email', methods=['POST'])
@limiter.limit("2 per minute")  # Apply custom limit for this route
def send_email():
    recipient = 'scottpetersonse@gmail.com'
    json_data = request.json

    # Get first name and last name from json_data
    first_name = json_data.get('firstName', '')
    last_name = json_data.get('lastName', '')

    # Update the subject line to include first name and last name
    subject = f'Message From Portfolio Site - {first_name} {last_name}'

    # Format the message body
    body = "You have received a new message from your portfolio site:\n\n"
    for key, value in json_data.items():
        body += f"{key.title()}: {value}\n"

    msg = Message(subject, recipients=[
                  recipient], sender=os.environ.get('MAIL_USERNAME'))
    msg.body = body

    try:
        mail.send(msg)
        return 'Email sent successfully!'
    except Exception as e:
        return str(e), 500


if __name__ == '__main__':
    app.run(debug=True)
