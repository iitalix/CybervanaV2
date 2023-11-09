from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired

def make_charlimit(form, field):
    #Checks for character limits in Make field
    make = field.data

    if len(make) > 15:
        raise ValidationError('Make cannot exceed 15 characters.')


def model_charlimit(form, field):
    #Checks for character limits in Make field
    model = field.data

    if len(model) > 30:
        raise ValidationError('Model cannot exceed 30 characters.')


def description_charlimit(form, field):
    #Checks for character limits in Make field
    model = field.data

    if len(model) > 100:
        raise ValidationError('Description cannot exceed 100 characters.')



class VehicleForm(FlaskForm):
    make = StringField("Make", validators=[DataRequired(), make_charlimit])
    model = StringField("Model", validators=[DataRequired(), model_charlimit])
    price = IntegerField("Price", validators=[DataRequired()])
    image = FileField("Upload a Photo", validators=[FileRequired(), FileAllowed(["png", "jpg", "jpeg", "gif"])])
    description = TextAreaField("Description", validators=[DataRequired(), description_charlimit])
    submit = SubmitField("Submit")
