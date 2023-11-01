from flask import Blueprint, request
from ..models import Vehicle, User, db
from random import choice, sample
from datetime import date
from flask_login import login_required, current_user
from ..forms import VehicleForm, UpdateVehicleForm
from .aws_helpers import upload_file_to_s3, get_unique_filename, remove_file_from_s3
from .auth_routes import validation_errors_to_error_messages

vehicles_routes = Blueprint('vehicles', __name__)


@vehicles_routes.route('/')
def index():
    """Getting 10 random images from our db for the rotating background on our logged OUT homepage"""
    all_vehicles = Vehicle.query.all()
    vehicle_list = sample(all_vehicles, 9)

    # list of 10 random vehicle dictionaries are going to be sent to redux.
    return [vehicle.to_dict() for vehicle in vehicle_list]


@vehicles_routes.route('/all')
@login_required
def all():
    all_vehicles = Vehicle.query.all()
    return [vehicle.to_dict() for vehicle in all_vehicles]


@vehicles_routes.route('/current')
@login_required
def current():
    """Getting 10 random images from our db to show on a logged IN users homepage. None of the photos can be from the logged In user."""
    # all_none_user_vehicles = vehicle.query.filter(vehicle.owner_id.is_not(current_user.id))
    all_user_vehicles = Vehicle.query.all()

    def filter_user_id(vehicle):

        return vehicle.owner_id != current_user.id
    all_non_user_vehicles = filter(filter_user_id, all_user_vehicles)

    ten_vehicles = sample(list(all_non_user_vehicles), 9)

    return [vehicle.to_dict() for vehicle in ten_vehicles]

    # list of 10 random vehicle dictionaries are going to sent, that are not the current users.
    # this is not tested bc it needs to be done on the front end to ensure there are no current user vehicles included.


@vehicles_routes.route('/new', methods=['GET', 'vehicle'])
@login_required
def new_vehicle():
    form = VehicleForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

        vehicle = vehicle(
            owner_id = current_user.id,
            title = form.data['title'],
            album_id = form.data['album_id'],
            photo_url = url,
            description = form.data['description'],
            created_at = date.today()
        )

        db.session.add(vehicle)
        db.session.commit()
        # this is a vehicle dictionary.
        # this needs to be validated on the front end once its built out.
        return {"resvehicle": vehicle.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@vehicles_routes.route('/no_album', methods=['GET', 'vehicle'])
@login_required
def new_vehicle_no_album():
    form = VehicleForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data["image"]
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

        vehicle = Vehicle(
            owner_id = current_user.id,
            title = form.data['title'],
            album_id = None,
            photo_url = url,
            description = form.data['description'],
            created_at = date.today()
        )

        db.session.add(vehicle)
        db.session.commit()
        # this is a vehicle dictionary.
        # this needs to be validated on the front end once its built out.
        return {"resvehicle": vehicle.to_dict()}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

@vehicles_routes.route("/update/<int:id>", methods=["PUT"])
@login_required
def update_vehicle(id):
    vehicle_to_update = Vehicle.query.get(id)
    form = UpdateVehicleForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        vehicle_title=form.data['title']
        vehicle_description=form.data['description']

        vehicle_to_update.title=vehicle_title
        vehicle_to_update.description=vehicle_description

        db.session.commit()
        # this is a vehicle dictionary.
        # this needs to be validated on the front end once its built out.
        return {"updated": "updated"}

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@vehicles_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_vehicles(id):
    vehicle_to_delete = Vehicle.query.get(id)
    if id < 101:
        db.session.delete(vehicle_to_delete)
        db.session.commit()
        return 'Success, your vehicle was deleted.'
    elif id > 100:

        file_delete = remove_file_from_s3(vehicle_to_delete.photo_url)

        db.session.delete(vehicle_to_delete)
        db.session.commit()
        return 'Success, your vehicle was deleted.'
    else:
        return {"Error": "Vehicle Delete Error, please try again"}


@vehicles_routes.route('/<int:id>')
@login_required
def get_vehicle_details(id):
    vehicle = Vehicle.query.get(id)

    return vehicle.to_dict()


@vehicles_routes.route('/<int:id>/comments/', methods=["vehicle"])
@login_required
def create_comment(id):
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data = form.data
        create_comment = Comment(
            user_id=current_user.id,
            vehicle_id=id,
            comment=data['comment'],
            created_at=date.today()
        )

        db.session.add(create_comment)
        db.session.commit()

        return create_comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400

# Not sure about how to update comment--by comment ID?


@vehicles_routes.route('/<int:id>/comments', methods=["PUT"])
@login_required
def update_comment():
    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        data = form.data
        create_comment = Comment(
            user_id=current_user.id,
            vehicle_id=id,
            comment=data['comment'],
            created_at=date.today()
        )

        db.session.add(create_comment)
        db.session.commit()
        # this is a vehicle dictionary.
        # this needs to be validated on the front end once its built out.
        return create_comment.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@vehicles_routes.route('/<int:id>/')
def vehicle_by_id():
    """Get vehicle by vehicle ID to show on vehicle Details Page (when user clicks on a photo vehicle)"""
    vehicle_to_get = Vehicle.query.get(id)

    return vehicle_to_get.to_dict()
