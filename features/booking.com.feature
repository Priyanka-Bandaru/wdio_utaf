Feature: The Booking.com Application

  Scenario: Positive::As a user, I can login to application
    Given I am navigating login page of Booking.com application
    When I login with <username> and <password>
    Then I can see landing page
    When I click on search and navigate to search page
    Then I can search for stay
    Then I can sort the hotel list and add to my wishlist
    # Then I can verify WishList
    # Then I can search for flights
    # Then I can perform profile actions

  # Scenario: Nagative::As a user I login with inavalid credentials
  #   Given I am navigating login page of Booking.com application
  #   When I login with invalid <username> and <password>
