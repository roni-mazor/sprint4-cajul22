import { BsCheck2Square } from 'react-icons/bs'


export const ChecklistPreview = ({checklist}) => {
    return (
        <section className="checklist-preview">
            <div className="checklist-title flex align-center">
                <span> <BsCheck2Square /></span><h3>{checklist.title}</h3>
            </div>
          
        </section>
    )
}