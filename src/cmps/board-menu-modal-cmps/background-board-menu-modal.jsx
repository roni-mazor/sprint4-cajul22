import { useEffect, useState } from "react"
import { BsSearch } from "react-icons/bs"
import { FiChevronLeft } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"
import { useDispatch } from "react-redux"
import { photoService } from "../../services/photo.service"
import { utilService } from "../../services/util.service"
import { saveBoard } from "../../store/board.actions"
import { BsPlusLg } from 'react-icons/bs'
import { uploadService } from "../../services/upload.service"

export const BackgroundBoardMenuModal = ({ setModalState, board, toggleMenuModal, }) => {
    const [backgroundModalState, setBackgroundModalState] = useState('background')


    const backgroundRenderedModal = () => {
        switch (backgroundModalState) {
            case 'home':
                return <Home setModalState={setModalState}
                    board={board} toggleMenuModal={toggleMenuModal}
                    setBackgroundModalState={setBackgroundModalState} />
            case 'photos':
                return <Photos
                    board={board} toggleMenuModal={toggleMenuModal}
                    setBackgroundModalState={setBackgroundModalState} />
            case 'colors':
                return <Colors
                    board={board} toggleMenuModal={toggleMenuModal}
                    setBackgroundModalState={setBackgroundModalState} />
            default:
                return <Home setModalState={setModalState}
                    board={board} toggleMenuModal={toggleMenuModal}
                    setBackgroundModalState={setBackgroundModalState} />
        }
    }

    return (
        <>
            {backgroundRenderedModal()}
        </>
    )
}

const Home = ({ setModalState, board, toggleMenuModal, setBackgroundModalState }) => {
    const dispatch = useDispatch()
    const onUploadImg = async (ev) => {
        const img = await uploadService.uploadImg(ev)
        saveBackground(img)
    }

    const saveBackground = (img) => {
        console.log(board)
        board.customBackgrounds.push(img.url)
        board.style = { backgroundImage: `url(${img.url})` }
        dispatch(saveBoard(board))
    }

    const changeBackgroundImage = (url) => {
        board.style = { backgroundImage: `url(${url})` }
        dispatch(saveBoard(board))
    }




    return (
        <>
            <header className="menu-modal-header ">
                <span onClick={() => setModalState('default')}><FiChevronLeft /></span>
                <h3 className="align-center">
                    Background
                </h3>
                <span onClick={toggleMenuModal}>
                    <IoMdClose />
                </span>
            </header>
            <hr />
            <section className="background-btns-container">
                <div onClick={() => setBackgroundModalState('photos')} className="background-btn">
                    <img src="https://skello.herokuapp.com/static/media/imgs-teaser-sidebar.8f9c1323c9c16601a9a4.jpg" alt="" />
                    <p>Photos</p>
                </div>
                <div onClick={() => setBackgroundModalState('colors')} className="background-btn">
                    <img src="https://skello.herokuapp.com/static/media/color-teaser-sidebar.ec32a2ed8dd8198b8ef0.jpg" alt="" />
                    <p>Colors</p>
                </div>
            </section>
            <hr />
            <h3 className="big">Custom</h3>
            <section className="backgrounds-container">

                <label className="background-btn attach-image">
                    <BsPlusLg />
                    <input type="file" onChange={onUploadImg} hidden />
                </label>
                {board?.customBackgrounds?.length > 0 && board.customBackgrounds.map(img => (
                    <div onClick={() => changeBackgroundImage(img)} style={{ backgroundImage: `url(${img})` }} >
                    </div>
                ))}
            </section>
        </>
    )
}




const Photos = ({ board, toggleMenuModal, setBackgroundModalState }) => {
    const [photos, setPhotos] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        loadPhotos()
    }, [])

    const loadPhotos = async (searchBy) => {
        if (!searchBy) searchBy = 'backgrounds'
        const photos = await photoService.getPhotos(searchBy)
        setPhotos(photos)
    }

    const onSearchPhoto = ({ target: { value } }) => {
        loadPhotos(value)
    }
    const changeBackgroundImage = (url) => {
        board.style = { backgroundImage: `url(${url})` }
        dispatch(saveBoard(board))
    }


    return (<>

        <header className="menu-modal-header ">
            <span onClick={() => setBackgroundModalState('home')}><FiChevronLeft /></span>
            <h3 className="align-center">
                Photos by <a target="_blank" href="https://unsplash.com/">Unsplash</a>
            </h3>
            <span onClick={toggleMenuModal}>
                <IoMdClose />
            </span>
        </header>
        <hr />
        <div className="search-photos-container">
            <input type="text" className="filter-text-input" placeholder="Photos" onChange={utilService.debounce(onSearchPhoto, 1000)} />
            <span className='icon-container'>
                <BsSearch />
            </span>
        </div>
        <section className="backgrounds-container">
            {photos && photos.map(p => (
                <div onClick={() => changeBackgroundImage(p.urlFull)} style={{ backgroundImage: `url(${p.urlSmall})` }} >
                    <a target="_blank" className="creator-link" href={p.creatorUrl}>{p.creatorName}</a>
                </div>
            ))}
        </section>
    </>
    )
}

const Colors = ({ board, toggleMenuModal, setBackgroundModalState }) => {
    const dispatch = useDispatch()
    const changeBoardBackground = (color) => {
        board.style = { backgroundColor: color }
        dispatch(saveBoard(board))
    }
    const colors = utilService.getBackgroundColors()
    return (<>

        <header className="menu-modal-header ">
            <span onClick={() => setBackgroundModalState('home')}><FiChevronLeft /></span>
            <h3 className="align-center">
                Colors
            </h3>
            <span onClick={toggleMenuModal}>
                <IoMdClose />
            </span>
        </header>
        <hr />
        <section className="backgrounds-container">
            {colors.map(color => <div onClick={() => { changeBoardBackground(color) }} style={{ backgroundColor: color }}></div>)}
        </section>
    </>
    )
}