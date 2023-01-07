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
                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по названию</div>
                        <input type="text" className="filter__input"/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по каталожному номеру</div>
                        <input type="text" className="filter__input"/>
                        
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                    </div>

                    <div className="filter__wrap">
                        <div className="filter__label">Поиск по CAS-№</div>
                        <input type="text" className="filter__input"/>
                        <button className="filter__btn"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="10" fill="white" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg></button>
                        
                       
                    </div>

                </div>

                <div className="filter__condition">
                    <div className="filter__row">
                        <label className="filter__parameter">Остаток </label>
                        <input className="custom-checkbox" type="checkbox" id="cube" name="cube"/>
                        <label className="custom-checkbox__text" for="cube">0%</label> <br />
                        <input className="custom-checkbox" type="checkbox" id="cube" name="cube"/>
                        <label className="custom-checkbox__text" for="cube">В наличии</label>
                    </div>

                    <div className="filter__row">
                        <label className="filter__parameter">Срок годности</label>
                        <input className="custom-checkbox" type="checkbox" id="cube" name="cube"/>
                        <label className="custom-checkbox__text" for="cube">Истек</label> <br />
                        <input className="custom-checkbox" type="checkbox" id="cube" name="cube"/>
                        <label className="custom-checkbox__text" for="cube">Годен</label>
                    </div>

                    <div className="filter__row">
                        <input className="custom-checkbox" type="checkbox" id="cube" name="cube"/>
                        <label className="custom-checkbox__text" for="cube">Избранное (13)</label> <br />
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