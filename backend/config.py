import os

from dotenv import load_dotenv

_ = load_dotenv()

USERNAME = os.getenv("USERNAME")
PASSWORD = os.getenv("PASSWORD")
LOCALHOST = os.getenv("LOCALHOST")
DB_NAME = os.getenv("DB_NAME")
