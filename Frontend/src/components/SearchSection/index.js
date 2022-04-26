import React, { useState, Component} from 'react'
import { SearchLabel, SearchH1, SearchInput, SearchButton, SearchForm, SearchContainer, SearchContent} from './SearchElements'

const SearchPage = () => {
    
    const [search, setSearch] = useState('');
  
    return (
        <div id= 'search'>
            <SearchContainer>
                <SearchContent>
                    <SearchH1>Search</SearchH1>
                    <SearchForm>
                        <SearchLabel>Input</SearchLabel>
                        <SearchInput 
                            type="text" 
                            required 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <SearchButton>Submit</SearchButton>
                        {/* <p>{title}</p>
                        <p>{body}</p>
                        <p>{text}</p> */}
                    </SearchForm>
                </SearchContent>
            </SearchContainer>
        </div>
    );
}

export default SearchPage