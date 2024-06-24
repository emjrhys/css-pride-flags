FLAG_PATH=src/components/flags
cd $FLAG_PATH
cp *[^_].vue source
touch source
cd source
for file in *.vue; do
    mv -- "$file" "${file%.vue}.txt"
done