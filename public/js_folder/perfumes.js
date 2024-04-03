 document.addEventListener('DOMContentLoaded', function () {
        fetch('/all_perfumes')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(perfumes => {
                renderPerfumes('allPerfumesContainer', perfumes);
            })
            .catch(error => console.error('Error fetching perfumes:', error));

        function renderPerfumes(containerId, perfumes) {
            const container = document.getElementById(containerId);

            if (container) {
                container.innerHTML = '';

                for (let i = 0; i < perfumes.length; i += 3) {
                    const row = document.createElement('div');
                    row.className = 'row';

                    for (let j = i; j < i + 3 && j < perfumes.length; j++) {
                        const perfume = perfumes[j];

                        const box = document.createElement('div');
                        box.className = 'col-md-3 box';

                        box.innerHTML = `
                            <img src="../uploads/${perfume.image}" alt="">
                            <h3>${perfume.name}</h3>
                            <p>${perfume.perfumeType} perfume</p>
                            <span>$${perfume.price}</span>
                            <i class='bx bxs-star'>(${perfume.reviews} Reviews)</i>
                            <br>
                            <p>Owner: ${perfume.username}</p>

                            <a href="" class="btn btn-primary">Buy Now</a>
                        `;

                        row.appendChild(box);
                    }

                    container.appendChild(row);
                }
            }
        }
    });