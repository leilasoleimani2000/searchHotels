import React, { useEffect, useState } from 'react';
import './App.css';
import ResultList from './components/ResultList/ResultList';
import SearchBox from './components/SearchBox/SearchBox';
import useDebouncedCallback from './hooks/useDebouncedCallback';
import useFetchData from './hooks/useFetchData';
import useSelectedItem from './hooks/useSelectedItem';
import Hotels from './models/Hotels';

function App() {
  const [term, setTerm]= useState<string>("");
  const debouncedFetchData = useDebouncedCallback(getData);
  const { data, fetchData, clearData } = useFetchData();
  const {selectedItem, fetchSelected} = useSelectedItem();


  useEffect(() => {
    debouncedFetchData();
  },[term]);

  function getData():void {
    if(!term) {
     clearData();
    } else {
      fetchData(term);
    }
  }

  const onSelectHotel = (hotel: Hotels) => {
    fetchSelected(hotel);
    // console.log(selectedItem);
    
  }


  return (
    <div className="App">
      <header >
        search hotel
      </header>
      <main>
        <SearchBox onChange={(term) => setTerm(term)}/>
        <ResultList data={data}  onSelectItem={onSelectHotel}/>
      </main>
    </div>
  );
}

export default App;
