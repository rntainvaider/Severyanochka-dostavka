from config import DB_NAME, LOCALHOST, PASSWORD, USERNAME
from sqlalchemy import create_engine

DATABASE_URL = f"postgresql://{USERNAME}:{PASSWORD}@{LOCALHOST}/{DB_NAME}"

engine = create_engine(DATABASE_URL)
