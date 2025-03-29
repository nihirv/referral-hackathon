import os
import openai
from dotenv import load_dotenv

def get_embedding(text, model="text-embedding-3-small"):
    """
    Get embeddings for a text string using OpenAI's API.
    
    Args:
        text (str): The text to get embeddings for
        model (str): The OpenAI embedding model to use
                     Options include:
                     - text-embedding-3-small (default, best price/performance)
                     - text-embedding-3-large (highest quality)
                     - text-embedding-ada-002 (legacy model)
    
    Returns:
        list: The embedding vector as a list of floats
    """
    # Load environment variables from .env file (if it exists)
    load_dotenv()
    
    # Set the API key
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OpenAI API key not found. Set it as OPENAI_API_KEY in your environment or .env file.")
    
    client = openai.OpenAI(api_key=api_key)
    
    # Get the embedding from OpenAI
    response = client.embeddings.create(
        input=text,
        model=model
    )
    
    # Extract the embedding vector from the response
    embedding = response.data[0].embedding
    
    return embedding

# Example usage
if __name__ == "__main__":
    # Example text
    sample_text = "This is a sample text to get embeddings for."
    
    try:
        # Get the embedding
        embedding = get_embedding(sample_text)
        
        # Print the first 5 values of the embedding vector and its dimension
        print(f"Embedding dimension: {len(embedding)}")
        print(f"First 5 values: {embedding[:5]}")
    except Exception as e:
        print(f"Error: {e}")
