import styles from './create-or-update.module.scss';
import categoryimage from '../../../../../../assets/admin/admin-logo-dummy.png';

export default function CreateORUpdateComponent(){
    return <>
<div>
    CreateORUpdate Form
    <div>
<div className={styles.createform__width}>
   <form>
    <div classname={styles.createform__img}>
    <img src={categoryimage} alt="title-category"/> 
    </div>
  
<div className={styles.wrapper2grid}>
    <div><label>Enter your name:</label>
        <input type="text"  placeholder='enter your name'/>
      </div>
    <div><label>Enter your name:</label>
        <input type="text"  placeholder='enter your name'/>
        </div>
        <div><label>Enter your name:</label>
        <input type="text"  placeholder='enter your name'/>
      </div>
      <div><label>Enter your name:</label>
        <input type="text"  placeholder='enter your name'/>
      </div>
</div>
<div className={styles.createform__smalltop}>
<label>Add description:</label>
<textarea type="text" placeholder='description'/>
</div>
<div className={styles.align__items__center}>
                            <button 
                                type="submit"
                            >
                            Create
                            </button>
</div>
                           
    </form> 
</div>
    </div>
</div>
    </>
}