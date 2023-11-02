from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired

class VehicleForm(FlaskForm):
    make = StringField("Make", validators=[DataRequired()])
    model = StringField("Model", validators=[DataRequired()])
    price = IntegerField("Price", validators=[DataRequired()])
    image = FileField("Upload a Photo", validators=[FileRequired(), FileAllowed(["png", "jpg", "jpeg", "gif"])])
    description = TextAreaField("Description", validators=[DataRequired()])
    submit = SubmitField("Submit")
