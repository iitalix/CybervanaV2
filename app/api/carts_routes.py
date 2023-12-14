from flask import Blueprint, request
from ..models import CartItem, db
from flask_login import login_required, current_user
from datetime import date
from .auth_routes import validation_errors_to_error_messages

cartitems_routes = Blueprint('cartitems', __name__)

@cartitems_routes.route('/<int:id>', methods=['POST'])
@login_required
def create_cartitem(id):

    new_form = CartItem(
        user_id = current_user.id,
        vehicle_id = id,
        created_at = date.today()
    )

    db.session.add(new_form)
    db.session.commit()
    return new_form.to_dict()

@cartitems_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_cartitem(id):
    cartitem_to_delete = CartItem.query.get(id)

    if (cartitem_to_delete):

        db.session.delete(cartitem_to_delete)
        db.session.commit()
        return {"message": "Cart Item Deleted!"}
    else:
        return {'errors': "No cart item to delete"}


@cartitems_routes.route('/')
def get_all_cartitems():
    cartitems = CartItem.query.all()

    return [cartitem.to_dict() for cartitem in cartitems]
