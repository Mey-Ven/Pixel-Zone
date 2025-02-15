from pixelzone.wsgi import application
from whitenoise import WhiteNoise

application = WhiteNoise(application)
