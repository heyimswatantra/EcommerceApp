import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SeachContainer = styled(Box)`
background: #fff;
width: 38%;
border-radius: px;
margin-left: 10px;
display: flex;
`;

const InputSearchBase = styled(InputBase)`
 padding-left: 20px;
 width: 100%;
 font-size: unset;
 `;

const SeachIconWrapper = styled(Box)`
color: blue;
padding: 5px;
`

const Search = () => {
    return (
        <SeachContainer>
            <InputSearchBase placeholder='Search for products, brands and more'/>
            <SeachIconWrapper>
                <SearchIcon/>
            </SeachIconWrapper>
        </SeachContainer>
    )
}


export default Search;