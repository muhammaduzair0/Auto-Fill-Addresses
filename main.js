document.addEventListener("DOMContentLoaded", function() {

    //DOM Elements

    const addressSearch = document.getElementById('addressSearch')
    const searchBtn = document.getElementById('searchBtn')
    const addressSuggestions = document.getElementById('addressSuggestions')
    const streetAddress = document.getElementById('streetAddress')
    const city = document.getElementById('city')
    const state = document.getElementById('state')
    const zipCode = document.getElementById('zipCode')
    const addressForm = document.getElementById('addressForm')
})

// Mock address database (in a real app, this would come from an API)
const addressDatabase = [
    {
      id: 1,
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    },
    {
      id: 2,
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90001"
    },
    {
      id: 3,
      street: "789 Oak Dr",
      city: "Chicago",
      state: "IL",
      zipCode: "60007"
    },
    {
      id: 4,
      street: "101 Pine St",
      city: "Seattle",
      state: "WA",
      zipCode: "98101"
    },
    {
      id: 5,
      street: "202 Maple Rd",
      city: "Austin",
      state: "TX",
      zipCode: "73301"
    }
  ];


  // Event Listeners

  searchBtn.addEventListener('click',searchAddresses)
  addressSearch.addEventListener('click', function(e){
    if(e.key === 'Enter'){
        searchAddresses()
    }
  })

  addressForm.addEventListener('submit', function(e){
    e.preventDefault()
    alert('Address submitted successfully!')
  })

  const searchAddresses = () => {
    const query = addressSearch.toLowerCase().trim()

// clear previous suggestions
    addressSuggestions.innerHTML = ''

// if query is empty return it   
    if (query === '') return;

    const filterAddresses = addressDatabase.filter(address => {
        address.street.toLowerCase().includes(query) ||
        address.city.toLowerCase().includes(query) ||
        address.state.toLowerCase().includes(query) ||
        address.zipCode.toLowerCase().includes(query)
    })

  }