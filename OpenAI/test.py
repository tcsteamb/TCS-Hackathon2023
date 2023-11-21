import openai
 
openai.api_key = ""
 
while True:

	ask = input('Question: ')

	response = openai.chat.completions.create(

    model="text-davinci-003",

    messages=[

        {

            "role": "user",

            "content": ask,

        },

    ],

		)
 
	text = response['choices'][0]['text']

	print ('Reply: '+text)