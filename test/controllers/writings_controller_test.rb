require "test_helper"

class WritingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get writings_index_url
    assert_response :success
  end
end
