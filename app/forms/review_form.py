from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, IntegerField
from wtforms.validators import DataRequired, ValidationError


def review_charlimit(form, field):
 #Checks for character limits in Make field
    review = field.data

    if len(review) < 10:
        raise ValidationError('Review must be at least 10 characters.')

    if len(review) > 1000:
        raise ValidationError('Review is limited to 1000 characters')



class ReviewForm(FlaskForm):
    review = TextAreaField("Title", validators=[DataRequired(), review_charlimit])
    stars = IntegerField("Stars", validators=[DataRequired()])
    submit = SubmitField("Submit")
