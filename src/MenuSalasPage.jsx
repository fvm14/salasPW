import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentMenuSalas from './components/ContentMenuSalas.jsx';
import {Box , Stack} from "@mui/material";


function MenuSalasPage() {
    return (

      <Box>
        <Header/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar/>
          <ContentMenuSalas/>
        </Stack>
      </Box>
    
    );
  }

export default MenuSalasPage;