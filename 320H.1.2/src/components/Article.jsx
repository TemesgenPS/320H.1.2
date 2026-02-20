import blogImage1 from './blog-image-1.jpg';
import blogImage2 from './blog-image-2.jpg';

function Article() {
    return (
        <>
        <article>
            <time datetime="2020-11-12">
                    11/12/2020
                </time>

                <h2>
                    On the Street in Brooklyn
                </h2>

                <img src={blogImage1} alt="A street in Brooklyn"/>

                <p>Cray ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem modi quas atque praesentium nihil eligendi assumenda laboriosam soluta similique vero tempore, molestias, cupiditate deleniti repudiandae ex. Assumenda, sit voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, voluptatibus iste. Rem facere voluptas dignissimos officia inventore molestias temporibus non corrupti eligendi ratione perferendis sapiente architecto sunt, blanditiis est illum!</p>   
                <h4 class="continues">Continues ...</h4>
        </article>

         <article>
                <time datetime="2020-11-11">
                    11/11/20
                </time>

                <h2>
                    Vintage in Vogue 
                </h2>

                <img src={blogImage2} alt="Vintage in Vogue"/>

                <p>Selfies sunt, dolor sit amet consectetur adipisicing elit. Cray ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem modi quas atque praesentium nihil eligendi assumenda laboriosam soluta similique vero tempore, molestias, cupiditate deleniti lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem sapiente excepturi vel similique, consequatur inventore quisquam voluptate delectus enim odio consequuntur beatae saepe necessitatibus numquam, maiores error unde voluptates fugiat.</p>
                <h4 class="continues">Continues ...</h4>
            </article>
        
        </>

    )
}

export default Article;