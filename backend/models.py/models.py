from database.database import Base
from sqlalchemy import Column, Date, Integer, String


class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    last_name = Column(String, nullable=False)
    first_name = Column(String, nullable=False)
    phone_number = Column(String, nullable=False)
    password = Column(String, nullable=False)
    birthday = Column(Date, nullable=False)
    region = Column(String, nullable=False)
    settlement = Column(String, nullable=False)
    gender = Column(String, nullable=False)
    card_number = Column(String, nullable=True)
    email = Column(String, nullable=True)
