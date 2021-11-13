const favId = document.querySelector('input[name="faveId"]').value;

const deleteNft = async function () {
    await fetch(`/api/favorites/${favId}`, {
        method: 'DELETE'
    })

    document.location.reload();
}

document.querySelector('.deleteBtn')