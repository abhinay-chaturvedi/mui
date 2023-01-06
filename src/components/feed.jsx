
import { Box} from '@mui/material';
import { Post } from './post';



const Feed= ()=>{
    return <Box flex={3.5} p={2}>
       <Post />
       <Post/>
       <Post/>
    </Box> 
    
} 
export default Feed;