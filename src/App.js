
import { useSelector } from 'react-redux';
import './App.css';
import ChatPanel from './components/ChatPanel/ChatPanel';
import SidePanel from './components/SidePanel/SidePanel';

function App() {
  const { currentChannel } = useSelector((state) => state.channels);
  return (
    <div className="row" style={{marginRight:"0"}}>
       <div className="col-sm-3"><SidePanel/></div>
      <div className="col-sm-9">
        {currentChannel && <ChatPanel {...{currentChannel}}/>}
        </div>
    </div>
     
   
  );
}

export default App;
