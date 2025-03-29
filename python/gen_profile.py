import random
import faker
import json

fake = faker.Faker()

# Sample investor-related job titles
job_titles = [
    "Angel Investor",
    "Venture Capital Partner",
    "Private Equity Associate",
    "Seed Fund Manager",
    "Institutional Investor",
    "Corporate Venture Capitalist",
    "Family Office Investor",
    "Impact Investor",
    "Growth Equity Investor",
    "Startup Scout",
    "Early-Stage VC",
    "Series A Investor",
    "Hedge Fund Analyst",
    "Principal at VC Firm",
    "Venture Partner",
    "Managing Director, Private Equity",
    "Strategic Investment Lead",
    "Syndicate Investor",
    "Startup Advisor & Investor",
    "Blockchain VC",
]


def gen_random_profiles():
    gender = random.choice(["men", "women"])
    picture_id = random.randint(1, 99)
    profile_picture = f"https://randomuser.me/api/portraits/{gender}/{picture_id}.jpg"
    return profile_picture


# Generate 100 entries
targets = []
for _ in range(100):
    gender = random.choice(["men", "women"])
    picture_id = random.randint(1, 99)
    profile_picture = f"https://randomuser.me/api/portraits/{gender}/{picture_id}.jpg"
    if gender == "men":
        name = fake.name_male()
    else:
        name = fake.name_female()

    job_title = random.choice(job_titles)
    description = fake.sentence(nb_words=12)
    targets.append(
        {
            "profilePicture": profile_picture,
            "name": name,
            "jobTitle": job_title,
            "description": description,
            "commonConnectionsProfilePictures": [
                gen_random_profiles() for _ in range(4)
            ],
        }
    )

# Save the generated data to a JSON file
with open("data/targets.json", "w") as f:
    json.dump(targets, f, indent=4)
