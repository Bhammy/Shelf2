class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(review_params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:id, :book_id, :user_id, :rating, :title, :body)
  end

end
