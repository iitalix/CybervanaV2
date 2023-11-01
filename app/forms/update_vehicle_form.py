from flask_wtf import FlaskForm
from wtforms import SubmitField, StringField, TextAreaField, IntegerField
from wtforms.validators import DataRequired


class UpdateVehicleForm(FlaskForm):
    title = StringField("Title", validators=[DataRequired()])
    description = TextAreaField("Description", validators=[DataRequired()])
    submit = SubmitField("Submit")
