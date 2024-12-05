import { Button } from '@/components/atoms/Button'
import { Checkbox } from '@/components/atoms/Checkbox'
import { Input } from '@/components/atoms/Input'
import InputWrapper from '@/components/atoms/InputWrapper'
import Pdf from '@/components/atoms/Pdf'
import { RadioGroup, RadioGroupItem } from '@/components/atoms/Radio'
import Select from '@/components/atoms/Select'
import CaretCircleRight from '@/components/atoms/icons/CaretCircleRight'

const Home = () => (
  <div className='flex flex-col gap-10 [&>*:nth-child(even)]:bg-state-blue/10 [&>*:nth-child(odd)]:bg-state-orange/10'>
    <div className='flex gap-4'>
      <Pdf file='sample.pdf' isThumbnail height={320} pageNumber={1} />
    </div>

    <div className='flex gap-4'>
      <div>
        <Button>DEFAULT</Button>
      </div>

      <div>
        <Button variant='disabled'>DISABLED</Button>
      </div>

      <div>
        <Button variant='roundedFull'>
          <CaretCircleRight />
        </Button>
      </div>

      <div>
        <Button>
          <CaretCircleRight />

          <span>BUTTON WITH ICON</span>

          <CaretCircleRight />
        </Button>
      </div>

      <div>
        <Button variant='outline'>OUTLINE</Button>
      </div>
    </div>

    <div className='flex gap-4'>
      <InputWrapper
        label='Label'
        subLabel='subLabel'
        assistive={<h1 className='text-state-pink'>Error</h1>}
      >
        <Input
          leftIcon={<CaretCircleRight />}
          rightIcon={<CaretCircleRight />}
          placeholder='Placeholder'
        />
      </InputWrapper>
    </div>

    <div className='flex gap-4'>
      <InputWrapper
        label='Label'
        subLabel='subLabel'
        assistive={<h1 className='text-state-pink'>Error</h1>}
      >
        <Select
          placeholder={{ label: 'Select an option', disabled: true }}
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
            { value: '4', label: 'Option 4' },
            { value: '5', label: 'Option 5' },
            { value: '6', label: 'Option 6' },
            { value: '7', label: 'Option 7' },
            { value: '8', label: 'Option 8' },
            { value: '9', label: 'Option 9' },
            { value: '10', label: 'Option 10' },
          ]}
        />
      </InputWrapper>
    </div>

    <div className='flex gap-4'>
      <InputWrapper
        label='Label'
        subLabel='subLabel'
        assistive={<h1 className='text-state-pink'>Error</h1>}
      >
        <Checkbox label='Select 1' />
        <Checkbox label='Select 2' defaultChecked />
        <Checkbox label='Select 3' disabled />
      </InputWrapper>
    </div>

    <div className='flex gap-4'>
      <InputWrapper
        label='Label'
        subLabel='subLabel'
        assistive={<h1 className='text-state-pink'>Error</h1>}
      >
        <RadioGroup defaultValue='option-two'>
          <RadioGroupItem value='option-one' label='Option 1' />
          <RadioGroupItem value='option-two' label='Option 2' />
          <RadioGroupItem value='option-three' disabled label='Option 3' />
        </RadioGroup>
      </InputWrapper>
    </div>
  </div>
)

export default Home
