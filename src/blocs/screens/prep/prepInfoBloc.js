import './prep.scss'
import '../../../sass/sassTemplates/info.scss'
import { PrepReagItem } from './prepReagItem'
import { useState } from 'react'

export const PrepInfoBloc = () => {
   const [activeRow, setActiveRow] = useState(null)
    
    
    return(
        <div className="info">
            <div className="filter">
                <div className="filter__inputs">
                    <div className="filter__input">
                        <label className="filter__label">Поиск по названию<br/><input type="text" className="filter__input"/></label>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__input">
                        <label className="filter__label">Поиск по каталожному номеру<br/><input type="text" className="filter__input"/></label>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__input">
                        <label className="filter__label">Поиск по CAS-№<br/><input type="text" className="filter__input"/></label>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                </div>

                <div className="filter__condition">
                    <div className="filter__row">
                        <label className="filter__label">Остаток </label> <br />
                        <input className="filter__checkbox" type="checkbox" />
                        <label className="filter__text">0%</label> <br />
                        <input className="filter__checkbox" type="checkbox" />
                        <label className="filter__text">В наличии</label>
                    </div>

                    <div className="filter__row">
                        <label className="filter__label">Срок годности</label> <br />
                        <input className="filter__checkbox" type="checkbox" />
                        <label className="filter__text">Истек</label> <br />
                        <input className="filter__checkbox" type="checkbox" />
                        <label className="filter__text">Годен</label>
                    </div>

                    <div className="filter__row">
                        <input className="filter__checkbox" type="checkbox" />
                        <label className="filter__text">Избранное (13)</label> <br />
                    </div>
                </div>
            </div>
            <div className="prep">
                <table className="prep__table">
                
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Наименование</th>
                            <th>Партия</th>
                            <th>CAS-№</th>
                            <th>Остаток</th>
                            <th>%</th>
                            <th>Годен до</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <PrepReagItem active={true}/>
                        <PrepReagItem/>
                        <PrepReagItem/>
                        <PrepReagItem/>
                    </tbody>

                </table>
                
            </div>
          
        </div>
    )
  }