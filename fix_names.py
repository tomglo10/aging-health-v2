import os

post_dir = '_posts'
for filename in os.listdir(post_dir):
    # Only process .md files that don't already start with a date
    if filename.endswith('.md') and not filename[0:4].isdigit():
        filepath = os.path.join(post_dir, filename)
        with open(filepath, 'r') as f:
            lines = f.readlines()
            date = None
            # Look for the date line in the front matter
            for line in lines:
                if line.startswith('date:'):
                    # Extract YYYY-MM-DD
                    date = line.replace('date:', '').strip().strip("'").strip('"')[:10]
                    break

            if date:
                new_name = f"{date}-{filename}"
                os.rename(filepath, os.path.join(post_dir, new_name))
                print(f"Renamed: {new_name}")
            else:
                print(f"Skipped: {filename} (No date found inside)")
