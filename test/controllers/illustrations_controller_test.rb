require "test_helper"

class IllustrationsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get illustrations_index_url
    assert_response :success
  end
end
