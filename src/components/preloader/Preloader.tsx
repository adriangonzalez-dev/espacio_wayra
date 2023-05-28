import {logo} from '../../assets'
import styles from './Preloader.module.css'
export const Preloader = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
            <img src={logo} alt="" className='w-[50px] h-[50px] absolute'/>
          <div className={styles.lds_roller}>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
              <div>
              </div>
          </div>
      </div>
  )
}
