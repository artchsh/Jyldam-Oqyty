import Folder from "./elements/Folder.element";

/**
 * @param {array} props
 * @param {array} props.array Array of objects with keys name and href 
 * @param {name} props.array[i].name Key name
 * @param {href} props.array[i].href Key href
 * @param {name} props.array[i].id Key ID
 * @returns list of rendered folders
 */
function FolderListRendering(props) {
    const array = props.array
    return (
        array.map((folder) => <Folder key={folder.id} name={folder.name} href={folder.href} />)
    )
}

export default FolderListRendering;
