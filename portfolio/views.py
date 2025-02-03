from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm
from django.contrib import messages

def index(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            subject = form.cleaned_data['subject']
            message = form.cleaned_data['message']

            # Send email
            send_mail(
                subject=f"Contact Form: {subject}",
                message=f"From: {name} ({email})\n\n{message}",
                from_email=email,
                recipient_list=['pixel.zone18@gmail.com'],  # Change to your email
                fail_silently=False,
            )

            messages.success(request, "Your message has been sent. Thank you!")
            form = ContactForm()  # Clear the form after successful submission
        else:
            messages.error(request, "Error in sending the message. Please try again.")
    else:
        form = ContactForm()

    return render(request, 'index.html', {'form': form})
