import * as React from 'react';
import  mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import Navbar from './Navbar';


mapboxgl.accessToken='pk.eyJ1Ijoic2hyYWs0IiwiYSI6ImNsYzNlY3BiNTIydGczeG81NTg5dDRzZmUifQ.DEZGqqc9v2mR1xggCBk9ww';


const daata =
    [{
        "id": 72,
        "id2":24,
        "region": "US",
        "data": 290
    }, {
        "id": 73,
        "id2":24,
        "region": "US",
        "data": 490
    }, {
        "id": 74,
        "id2":24,
        "region": "AT",
        "data": 790
    }, {
        "id": 75,
        "region": "SE",
        "data": 590
    }, {
        "id": 72.5,
        "id2":24,
        "region": "AT",
        "data": 290
    }, {
        "id": 73.5,
        "id2":24,
        "region": "SE",
        "data": 390, 
        properties: {
            'marker-color': '#3bb2d0',
            'marker-size': 'large',
            'marker-symbol': 'rocket'
          }
    }]


class Dump extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lng:72.58361,
            lat:23.2023,
            zoom:10
        }
    }
    componentDidMount(){
        const map = new mapboxgl.Map({
            container:this.mapContainer,
            style : 'mapbox://styles/mapbox/navigation-night-v1',
            center:[this.state.lng, this.state.lat],
            zoom:this.state.zoom
        });
        
        daata.forEach((location)=>{
            console.log(location)
            const marker = new mapboxgl.Marker({"color": "#b40219"})
                                    .setLngLat([location.id,23])
                                    .setPopup(new mapboxgl.Popup({offset:30})
                                    .setHTML('<h3>' + location.data  +  '</h3>' + '<h4>' + location.region + '</h4>')
                                    )
                                    
                                    .addTo(map);
        });
    };
    render(){
        return(
            <>
            <Navbar/>
            <h1 style={{color:"red"}}>Red Pointer is where you will find Donation centers!</h1>
            <div>
                <div ref={el => this.mapContainer = el} style={
                    {width:'100%' , height:'100vh'}
                }/>
            </div>
            </>
        )
    }
}
export default Dump;