from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired

class VehicleForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    image = FileField("Select a Photo", validators=[FileRequired(), FileAllowed(["pdf", "png", "jpg", "jpeg", "gif"])])
    description = TextAreaField("Description", validators=[DataRequired()])
    album_id = IntegerField("Album Id")
    submit = SubmitField("Submit")
