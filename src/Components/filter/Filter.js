import React from 'react';
import axios from 'axios';
import '../../Styles/details.css';
import '../../Styles/Filter.css';
import queryString from 'query-string';

// Class Component
class Filter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantData: [],
            locationValues: [],
            temp: "",
            page: 2,
            sortOrder: 1,
            sortData: [],
            selectedLocation: '',
            tempData: [],
            cityLocation: []
            
            
        }
    }

    componentDidMount() {
        this.state.loading = true
        const qs = queryString.parse(this.props.location.search);
        const restaurantId = qs.restaurant;
        axios(
            {
                method: 'GET',
                url: 'https://msassignment8.herokuapp.com/citylist/getcitylist',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ locationValues: response.data })).catch()
        axios(
            {
                method: 'GET',
                url: 'https://msassignment8.herokuapp.com/restaurant/getRestaurants',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()


        const city = localStorage.getItem('city');
        axios(
            {
                method: 'GET',
                url: 'https://msassignment8.herokuapp.com/citylist/getcitylist',
                header: { 'Content-Type': 'application/json' }
            }
        ).then((res) => {
            console.log(res.data[0].city)
            this.setState({
                cityLocation: res.data
            })
            console.log(this.state.cityLocation)


        })
    }

    fatchAgainst = () => {
        axios(
            {
                method: 'GET',
                url: 'https://msassignment8.herokuapp.com/restaurant/getRestaurants',
                headers: { 'Content-Type': 'application/json' }
            }
        ).then(response => this.setState({ restaurantData: response.data })).catch()
    }




    handleCuisineChange = (e, cuisine) => {
        if (e.target.checked) {
            this.setState({ temp: cuisine })
        } else {
            this.setState({ temp: "" })

        }

    }

    handleShowMe = () => {
        this.setState({ page: this.state.page + 2 })
    }
    handleShowhhhhhMe = () => {
        if (this.state.page > 2) {

            this.setState({ page: this.state.page - 2 })
        }
    }


    lowToHigh = (e) => {
        if (e.target.checked) {


            const parsePrice = x => parseFloat(x.replace(/^\$/, '')) || 0
            const sortedStudios = this.state.restaurantData
                .slice()
                .sort((a, b) => parsePrice(a.min_price) - parsePrice(b.min_price))

            console.log(sortedStudios)
            this.setState({ restaurantData: sortedStudios })
        }


    }
    HightToLow = (e) => {
        if (e.target.checked) {


            const parsePrice = x => parseFloat(x.replace(/^\$/, '')) || 0
            const sortedStudios = this.state.restaurantData
                .slice()
                .sort((a, b) => parsePrice(b.min_price) - parsePrice(a.min_price))

            console.log(sortedStudios)
            this.setState({ restaurantData: sortedStudios })
        }


    }
    sortingOne = (e) => {


        const high = 500
        // console.log(value)
        const { restaurantData } = this.state
        const res = restaurantData.filter((data) => data.min_price < high)
        this.setState({ restaurantData: res })

        setTimeout(() => {

            this.fatchAgainst()
        }, 10000);




    }
    sortingTwo = () => {

        const low = 500
        const high = 1000
        // console.log(value)
        const { restaurantData } = this.state
        const res = restaurantData.filter((data) => data.min_price < high && data.min_price > low)
        this.setState({ restaurantData: res })
        setTimeout(() => {

            this.fatchAgainst()
        }, 10000);

    }
    sortingThree = () => {

        const low = 1000
        const high = 1500
        // console.log(value)
        const { restaurantData } = this.state
        const res = restaurantData.filter((data) => data.min_price < high && data.min_price > low)
        this.setState({ restaurantData: res })
        setTimeout(() => {

            this.fatchAgainst()
        }, 10000);

    }
    sortingFour = () => {

        const low = 1500
        const high = 2000
        // console.log(value)
        const { restaurantData } = this.state
        const res = restaurantData.filter((data) => data.min_price < high && data.min_price > low)
        this.setState({ restaurantData: res })
        setTimeout(() => {

            this.fatchAgainst()
        }, 10000);

    }

    sortingFive = () => {


        const high = 2000
        // console.log(value)
        const { restaurantData } = this.state
        const res = restaurantData.filter((data) => data.min_price > high)
        this.setState({ restaurantData: res })
        setTimeout(() => {

            this.fatchAgainst()
        }, 10000);




    }



    searchHandler = (event) => {
        const { restaurants } = this.state;
        const searchText = event.target.value;
        let filteredList;
        if (searchText === "") {
            filteredList = [];
        } else {
            filteredList = restaurants.filter((item) => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            })
        }
        this.setState({ suggestions: filteredList, searchText: searchText });
    }





    handleLocationChange = (e) => {
        const locatin_id = e.target.value;

        this.setState({ selectedCityName: locatin_id })

    };




    render() {
        const { restaurantData, locationValues } = this.state;
        return (<div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                    </div>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                        <h1 className='Filterbreakfast'>Places in {this.state.selectedCityName ? this.state.selectedCityName : "your selected location"}</h1>
                    </div>
                    <div className='col-sm-12 col-ms-12 col-lg-12'>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <div className='Filterrectangle'>
                            <div className='FilterFilt'>Filters</div>
                            <div className='Filter-Select-Location'>Select Location</div>
                            <div>
                                <select className='locationDropdown' onChange={(e) => this.handleLocationChange(e)} >
                                    <option value="0">Select</option>
                                    {this.state.cityLocation.map((item) => {
                                        return <option value={item.location_id}>{`${item.name}, ${item.city}`}</option>
                                    })}
                                </select>
                            </div>
                            <div className=''>Cuisine</div>
                            <div>
                                <input type="checkbox" className='check' onChange={(e) => this.handleCuisineChange(e, 'North Indian')} />
                                <span className='head'>North Indian</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' name='cuisine' onChange={(e) => this.handleCuisineChange(e, 'South Indian')} />
                                <span className='head' >South Indian</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' onChange={(e) => this.handleCuisineChange(e, 'Chinese')} />
                                <span className='head'>Chinese</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' onChange={(e) => this.handleCuisineChange(e, 'Fast Food')} />
                                <span className='head'>Fast Food</span>
                            </div>
                            <div>
                                <input type="checkbox" className='check' onChange={(e) => this.handleCuisineChange(e, 'Street Food')} />
                                <span className='head'>Street Food</span>
                            </div>
                            <div className='CostFilter'>Cost for Two</div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" onChange={(e) => this.sortingOne(e)} />
                                <span className='head'>Less than Rs. 500</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" onChange={(e) => this.sortingTwo(e)} />
                                <span className='head'>Rs. 500 to Rs. 1000</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" onChange={(e) => this.sortingThree(e)} />
                                <span className='head'>Rs. 1000 to Rs. 1500</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" onChange={(e) => this.sortingFour(e)} />
                                <span className='head'>Rs. 1500 to Rs. 2000</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="cost" onChange={(e) => this.sortingFive(e)} />
                                <span className='head'>Rs. 2000+</span>
                            </div>
                            <div className='FilterSort'>Sort</div>
                            <div >
                                <input type="radio" className='radiobutton' name="sort" onChange={this.lowToHigh} />
                                <span className='head'>Price low to high</span>
                            </div>
                            <div>
                                <input type="radio" className='radiobutton' name="sort" onChange={this.HightToLow} />
                                <span className='head'>Price high to low</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-8 col-md-8 col-lg-8'>

                        {this.state.temp === '' ? (

                            restaurantData.map((item, index) => index < this.state.page && (
                                <div className='FilterItems'>
                                    <img src={item.image} className="FilterPic1" />
                                    <div className='FilterTheBigChill'>{item.name}</div>
                                    <div className='FilterFort'>{item.address}</div>
                                    <div className='FilterAddress'>{item.locality}, {item.city}</div>
                                    <div><hr /></div>
                                    <div className='FilterCUISINES'>CUISINES:</div>
                                    <div className='FilterCOSTFORTWO'>COST FOR TWO:</div>
                                    <div className='FilterBakery'>{item.cuisine}</div>
                                    <div className='FilterSevenHundred'>{item.min_price}</div>
                                </div>
                            ))) : (
                            restaurantData.filter((itemto) => itemto.cuisine === this.state.temp).map((item) => {
                                return <div className='FilterItems'>
                                    <img src={item.image} className="FilterPic1" />
                                    <div className='FilterTheBigChill'>{item.name}</div>
                                    <div className='FilterFort'>{item.address}</div>
                                    <div className='FilterAddress'>{item.locality}, {item.city}</div>
                                    <div><hr /></div>
                                    <div className='FilterCUISINES'>CUISINES:</div>
                                    <div className='FilterCOSTFORTWO'>COST FOR TWO:</div>
                                    <div className='FilterBakery'>{item.cuisine}</div>
                                    <div className='FilterSevenHundred'>{item.min_price}</div>
                                </div>
                            })


                        )
                        }

                        {this.state.selectedCityName === '' ? (

                            restaurantData.map((item, index) => (
                                
                                <div className='FilterItems'>
                                    <img src={item.image} className="FilterPic1" />
                                    <div className='FilterTheBigChill'>{item.name}</div>
                                    <div className='FilterFort'>{item.address}</div>
                                    <div className='FilterAddress'>{item.locality}, {item.city}</div>
                                    <div><hr /></div>
                                    <div className='FilterCUISINES'>CUISINES:</div>
                                    <div className='FilterCOSTFORTWO'>COST FOR TWO:</div>
                                    <div className='FilterBakery'>{item.cuisine}</div>
                                    <div className='FilterSevenHundred'>{item.min_price}</div>
                                </div>
                            ))) : (
                            restaurantData.filter((itemto) => itemto.city === this.state.selectedCityName).map((item) => {
                                return <div className='FilterItems'>
                                    <img src={item.image} className="FilterPic1" />
                                    <div className='FilterTheBigChill'>{item.name}</div>
                                    <div className='FilterFort'>{item.address}</div>
                                    <div className='FilterAddress'>{item.locality}, {item.city}</div>
                                    <div><hr /></div>
                                    <div className='FilterCUISINES'>CUISINES:</div>
                                    <div className='FilterCOSTFORTWO'>COST FOR TWO:</div>
                                    <div className='FilterBakery'>{item.cuisine}</div>
                                    <div className='FilterSevenHundred'>{item.min_price}</div>
                                </div>
                            })


                        )
                        }


                    </div>
                    <div className='col-sm-8 col-md-8 col-lg-8'>
                        {restaurantData && restaurantData.length > 0 ?
                            <div class='button'>
                                <div className='Filterpagination'    >
                                    <button onClick={this.handleShowMe} className='btn btn-primary arrowbtn1' >Next</button>

                                    <button onClick={this.handleShowhhhhhMe} className="btn btn-primary arrowbtn2 " >Previous</button>
                                </div>
                            </div> : `No Records Found`
                        }
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Filter;
