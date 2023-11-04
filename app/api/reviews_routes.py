from flask import Blueprint, request
from ..models import Album, Comment, Favorite, Post, User, db
from flask_login import login_required, current_user
from ..forms import CommentForm
from .auth_routes import validation_errors_to_error_messages
from datetime import date

comments_routes = Blueprint('comments', __name__)

#create a comment
@comments_routes.route('/new/posts/<int:id>', methods=['POST'])
@login_required
def post_new_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment = Comment(
            user_id=current_user.id,
            post_id=id,
            comment=form.data['comment'],
            created_at=date.today()
        )
        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@comments_routes.route('/<int:id>/update/posts/', methods=['PUT'])
@login_required
def update_new_comment(id):
    comment_to_update = Comment.query.get(id)

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_comment=form.data['comment'],
        comment_to_update.comment = new_comment[0]

        db.session.commit()
        return comment_to_update.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


#get all comments
@comments_routes.route('/all')
@login_required
def get_all_comments():
    all_comments = Comment.query.all()
    return [comment.to_dict() for comment in all_comments]

#get one comment
@comments_routes.route('/')


#delete a comment
@comments_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_comment(id):
    comment_to_delete = Comment.query.get(id)
    db.session.delete(comment_to_delete)
    db.session.commit()
    return {"Message" : "Comment Deleted"}
