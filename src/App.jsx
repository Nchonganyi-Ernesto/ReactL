import According from './components/According';
import Randomcolor from './components/Randomcolor';
import StarRating from './components/star-Rating';  

function App(){
    return (
        <div className='App'>
        { /*<According/>*/}
        {/* <Randomcolor/>*/}
         <StarRating noOfStars={10}/>
        </div>
        

    );
   
}

export default App;