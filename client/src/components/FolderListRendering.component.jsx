import Folder from './elements/Folder.element';

function FolderListRendering(props) {
    const array = props.array;
    return array.map((folder) => (
        <Folder key={folder.id} name={folder.name} href={folder.href} />
    ));
}

export default FolderListRendering;
