import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TotalSales from './components/TotalSales';
import SalesGrowth from './components/SalesGrowth';
import NewCustomers from './components/NewCustomers';
import RepeatCustomers from './components/RepeatCustomers';
import CustomerLifetimeValue from './components/CustomerLifetimeValue';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import App2 from './components/Bar2';
import App21 from './components/Bar21';
import PieChart from './components/PieChart';
import BarGraph2 from './components/BarGraph2';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
         
            <Stack direction={"row"} spacing={6}>
              <Link to={"barGraph"}><Button variant='contained' color='warning'>
                Bar Graph
              </Button>
              </Link>
          
      <Link to="basicGraph" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Line Graph
        </Button>
      </Link>
      <Link to={"pieChart"}><Button variant='contained' color='error'>
        Pie Chart
        </Button></Link>
        <Link to={"customerdata"}><Button>
          Bar Graph 2
        </Button>
        </Link>
      <Link to="/sales-growth" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="success">
          Sales Growth
        </Button>
      </Link>
      <Link to="/new-customers" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="warning">
          New Customers
        </Button>
      </Link>
      <Link to="/repeat-customers" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="info">
          Repeat Customers
        </Button>
      </Link>
      {/* <Link to="/geographical-distribution" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary">
          Geographical Distribution
        </Button>
      </Link> */}
      {/* <Link to="/customer-lifetime-value" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="error">
          Customer Lifetime Value
        </Button>
      </Link> */}
     
      </Stack>
     
          </ul>
        </nav>

        <Routes>
          
          <Route path='customerdata' element ={<BarGraph2/>}></Route>
          <Route path='pieChart' element ={<PieChart/>}></Route>
          <Route path="/" element={<TotalSales />} />
          <Route path='/basicGraph' element={<App2/>}></Route>
          <Route path='barGraph' element={<App21/>}/>
          <Route path="/sales-growth" element={<SalesGrowth />} />
          <Route path="/new-customers" element={<NewCustomers />} />
          <Route path="/repeat-customers" element={<RepeatCustomers />} />
          {/* <Route path="/geographical-distribution" element={<GeographicalDistribution />} /> */}
          <Route path="/customer-lifetime-value" element={<CustomerLifetimeValue />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;