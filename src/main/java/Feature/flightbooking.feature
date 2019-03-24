Feature: Flight booking with cheapest price
Scenario: Search for cheapest flight
Given I visit travells sight
When I click on FLIGHTS
When I select from London City Airport
When I select to Dubai Intl Airport
When I select on return Trip
When I select departure 2weeks from todays date
When I select return date 2weeks from departure date
When I select 2 Adult  
When I select 2 child
When I click on search button
When I filter by Turkish and Emirates airways
Then I click on Booknow withcheapest price
Then I am taken to booking page