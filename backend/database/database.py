from config import DB_NAME, LOCALHOST, PASSWORD, USERNAME
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = f"postgresql://{USERNAME}:{PASSWORD}@{LOCALHOST}/{DB_NAME}"

engine = create_engine(DATABASE_URL)
session_local = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

Base.metadata.create_all(dind=engine)
