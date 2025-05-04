import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Book {
      id: number;
      title: string;
      author: string;
      description: string;
      category_id: number;
      category_name: string;
}

function CategoryPage(){
    const [loading, setLoading] = useState<boolean>(true);
    const [books, setBooks] = useState<Book[]>([]);
    const { categoryName } = useParams<{ categoryName: string }>();

    console.log('categoryName:', categoryName);

    useEffect(() => {
        const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/api/books/category/${categoryName}`);
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchBooks();
    }, [categoryName]);

    return(
        <div className="category-page">
            <h1>Books in {categoryName}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {books.map((book: Book) => (
                        <li key={book.id}>
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                            <p>{book.description}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
};


export default CategoryPage;